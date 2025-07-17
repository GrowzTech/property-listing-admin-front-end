import { redirect } from "next/navigation";

const page = () => {
  redirect("/admin/auth/login");
};

export default page;
