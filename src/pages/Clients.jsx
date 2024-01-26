import Wrapper from "../components/Wrapper";

const Clients = () => {
  return (
    <div className="my-32">
        <Wrapper>
      <div className="space-y-6">
        <h3 className="text-3xl">Our Clients</h3>
        <p className="text-lg text-zinc-600">
          Our client ecosystem enables us to help customers faster with the best-suited technology
          solutions. Our collaboration strengthens our solution building capabilities to solve
          critical business challenges of the customers. With every new partner in our ecosystem, we
          move one step ahead in touching peoples lives with the latest technology.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <img src="https://pacavoit.com/images/team/1.jpg" alt="" />
        <img src="https://pacavoit.com/images/team/2.jpg" alt="" />
        <img src="https://pacavoit.com/images/team/3.jpg" alt="" />
      </div>
        </Wrapper>
    </div>
  );
};

export default Clients;
