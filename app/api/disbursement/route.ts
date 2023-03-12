import disbursements from "@/data/disbursements.json";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status_code");
  const search = searchParams.get("search");
  const pageRaw = searchParams.get("page");
  const itemsPerPageRaw = searchParams.get("per_page");

  const page = pageRaw ? +pageRaw : 1;
  const itemsPerPage = itemsPerPageRaw ? +itemsPerPageRaw : 10;

  let records = disbursements;
  let totalItems = 0;

  // filter
  if (status) {
    const statuses = status.split(",");
    records = disbursements.filter((d) => statuses.includes(d.last_status));
  }

  // search
  if (search) {
    records = records.filter((d) => {
      return (
        d.external_id.toLowerCase().includes(search.toLowerCase()) ||
        d.referral_affiliate.affiliate_name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
  }

  // count
  totalItems = records.length;

  // page
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  records = records.slice(start, end);

  return NextResponse.json({
    metadata: {
      page: page,
      per_page: itemsPerPage,
      page_count: Math.ceil(totalItems / itemsPerPage),
      total_count: totalItems,
    },
    records,
  });
};
