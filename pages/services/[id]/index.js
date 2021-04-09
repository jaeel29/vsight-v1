import { useRouter } from "next/router";
import { servicesPage } from "../../../data/vsight-data";

function ServicePage() {
  const router = useRouter();

  const service = servicesPage[router.query.id];

  return (
    <div>
      <service.Icon />
      <h1>{service.title}</h1>
      <p>{service.content}</p>
    </div>
  );
}

export default ServicePage;
