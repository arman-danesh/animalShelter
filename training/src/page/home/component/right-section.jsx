import Test from'../image/test.jpg';
import Card from'../../../layout/card/card';
import useApi from "../../../component/APIContextProvider";

export default function RightSection() {
  const { data, loading, error } = useApi("https://fakestoreapi.com/products");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <section className="col-12 col-lg-8 rounded-4 m-0 p-0">
        <div>
          <div className="w-100 px-2">
            <img
              src={Test}
              className="card-img rounded-4 mb-3 border border-1 border-dark shadow"
              style={{ objectFit: "cover", height: "50vh" }}
              alt={Test}
            />
          </div>
          <div className="row p-0 mx-0 mb-0 -center">
            {data.map((i) => (
              <div className="col-12 col-lg-4 p-2">
                <Card image={i.image} title={i.title} des={i.description} price={i.price} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}