import React, { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { RWebShare } from "react-web-share";
import { IoMdShare } from "react-icons/io";
import { useParams } from "react-router-dom";
export default function ContextDetail() {
  const { id, type } = useParams();
  const [data, setdata] = useState({});
  console.log(id, type);

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchHistory = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/history/" + id,
        config
      );
      setData(data.data);
    };

    const fetchSaved = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved/" + id,
        config
      );
      setData(data.data);
    };

    if (type === "history") {
      fetchHistory();
    } else if (type === "saved") {
      fetchSaved();
    }
  }, []);

  return (
    <div>
      <MainLayout>
        <h2 className="font-bold text-xl mt-10">Context Title</h2>
        <p className="mt-5">
          Constext Detail. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tenetur mollitia quidem error totam, aliquam deserunt ad?
          Eligendi ratione, accusantium, earum officiis voluptates vel
          perspiciatis, tenetur similique ad error sequi rerum dolor eum omnis
          eaque odit explicabo pariatur autem laborum. Repellendus numquam
          dolores, illo excepturi eius, expedita itaque optio velit, nulla
          delectus non perferendis? Temporibus ipsa asperiores quasi eaque nulla
          totam placeat consequatur culpa eius eos repudiandae laborum debitis,
          ad adipisci beatae voluptatum explicabo. Enim suscipit reiciendis id
          facilis aperiam excepturi veritatis voluptatibus fugiat. Vel assumenda
          rem veniam voluptate quaerat quas id doloribus, nulla unde similique?
          Quo delectus laborum distinctio odio maxime nobis, eveniet temporibus
          doloribus error voluptas inventore libero deleniti, fugit ullam,
          placeat soluta quia id suscipit voluptatem nesciunt! Expedita eligendi
          dolore, deleniti modi et nam facere quod at, quaerat aut amet alias
          eius repellat ad quam. Exercitationem, accusamus, doloribus animi in
          harum reiciendis ipsa porro odio deserunt laborum suscipit, placeat
          deleniti quae ipsam at. Provident quia aut nihil excepturi dolorem
          inventore eligendi veniam et natus, deleniti, nostrum officia eum
          exercitationem quo recusandae debitis ratione sit est asperiores
          quisquam totam doloremque itaque alias! Repellendus nihil ipsam
          praesentium impedit eum debitis dolores sint omnis recusandae
          voluptas! Reiciendis quidem temporibus dicta velit maxime nostrum
          exercitationem, similique excepturi incidunt fugiat! Ullam, cum
          dolorum id eveniet perspiciatis esse doloremque suscipit magnam animi!
          Beatae, facere, consequuntur placeat nisi unde incidunt pariatur
          blanditiis voluptatibus fugit officia optio quos nemo molestiae odit
          consectetur sequi quia ut facilis! Alias reprehenderit iusto quod qui
          perspiciatis fugiat, ipsa doloribus expedita ex eos officiis quis
          recusandae totam aliquam delectus quisquam dolore aliquid officia sit
          beatae. Harum unde dolor illum qui, voluptatem sint autem facilis,
          reiciendis architecto et quae accusantium molestiae esse soluta
          maiores, porro possimus commodi cum ratione ex voluptate totam iste ea
          perferendis. Vitae maiores aliquam nostrum sapiente molestias, a
          voluptate voluptatibus cumque. Ullam magnam rem minus illum
          consectetur totam eum? Vel, fugit omnis. Hic porro voluptatum dolorum,
          similique possimus soluta tempora minus esse, itaque, accusantium
          officia modi aperiam minima? Eum nesciunt quia tempora reiciendis
          quibusdam delectus optio distinctio minus cumque, numquam ipsum in
          tenetur obcaecati aperiam, recusandae sapiente, nam rem quidem
          accusamus. Odit molestiae quis, velit atque unde error natus nam iste
          dolorem tenetur ullam cum aperiam laboriosam sunt quia rem
          reprehenderit mollitia inventore veritatis assumenda? Non laboriosam
          dicta numquam veniam recusandae animi, inventore odit voluptatum
          fugiat. Ut adipisci aperiam tempora eaque corrupti corporis amet?
          Impedit quod saepe voluptate error labore ipsa? Sed minima nam atque
          accusantium eveniet possimus error quidem culpa nihil obcaecati
          tenetur, ut facilis laboriosam, quod quisquam reprehenderit itaque
          animi! Consectetur sint assumenda, voluptates quod placeat ipsam eius,
          deserunt dolores est debitis mollitia repellat. Sapiente doloribus
          dolore dolorum voluptas dolor cupiditate odio aut. Rerum blanditiis ab
          repudiandae harum alias. Eos eligendi possimus quam necessitatibus
          officia debitis alias, cum harum? Totam nihil odio obcaecati culpa
          asperiores repellendus hic. Neque expedita ea doloribus aliquam
          aspernatur illum facere reprehenderit, voluptatibus porro cum illo
          tenetur rem sapiente. Facere doloremque quod eveniet officiis? Dolore
          architecto nobis itaque numquam consequatur, omnis incidunt.{" "}
        </p>
        <section className="my-10 flex gap-8">
          <RWebShare
            data={{
              text: "Contextify Your Browser Experience",
              url: "https://contxtify-ai.com/",
              title: "Contextify",
            }}
            // onClick={() => console.log("shared successfully!")}
          >
            <button className="flex flex-row bg-[#fff] justify-around text-purple-900 rounded-xl px-10 py-4">
              <IoMdShare className="gap-2" color="#4B0082" />
              Share
            </button>
          </RWebShare>
        </section>
      </MainLayout>
    </div>
  );
}
