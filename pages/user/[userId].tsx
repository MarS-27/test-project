// import getUserInfo from "@/api/getUserInfo";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/constants/constants";
import { IUserFullInfo } from "@/models/models";

export async function generateStaticParams() {
//   const { userId } = useParams();
//   const user = await fetch(`${BASE_URL}/${id}`).then((res) => {
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   });

//   return {
//     params: { user },
//   };
// }

// export default function Page() {
//   const { slug } = params;
//   // ...
// }

export default async function User({
  params,
}: {
  params: { user: IUserFullInfo };
}) {
  const { user } = params;

  return (
    <section className="grid-content py-5 text-stone-800 mx-auto w-4/5 gap-5 flex justify-around items-center text-2xl">
      {/* <div className=""> */}
      <Image
        src={user.image}
        alt={user.firstName}
        width={400}
        height={600}
        priority={true}
      />
      <div className="">
        <p>
          <span className="font-bold">First name:</span> {user.firstName}
        </p>
        <p>
          <span className="font-bold">Last name:</span> {user.lastName}
        </p>
        <p>
          <span className="font-bold">Age:</span> {user.age}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-bold">Address: </span>
          {user.address.address}, {user.address.city}
        </p>
      </div>

      {/* </div> */}
    </section>
  );
}