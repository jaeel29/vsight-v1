import { useRouter } from "next/router";
import Industrial from "../../../components/icons/industrial-icon";

function ServicePage() {
  const router = useRouter();

  const Id = router.query.id;

  return (
    <div>
      {Id === "Industrial" && <Industrial />}
      <h1>This is the service {Id}</h1>
    </div>
  );
}

export default ServicePage;
