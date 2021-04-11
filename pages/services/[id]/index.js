import { servicesPage } from "../../../data/vsight-data";
import { useRouter } from "next/router";

function ServicePage() {
  const router = useRouter();

  const service = servicesPage[router.query.id];

  return (
    <div>
      {service && service.icon}
      <h1>{service ? service.title : "Service title"}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        voluptas? Nesciunt tenetur at est aut libero repudiandae eaque facere
        odio temporibus, repellat natus saepe quam, et, maiores nihil nemo
        aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolorem, voluptas? Nesciunt tenetur at est aut libero repudiandae eaque
        facere odio temporibus, repellat natus saepe quam, et, maiores nihil
        nemo aperiam.
      </p>
    </div>
  );
}

export default ServicePage;
