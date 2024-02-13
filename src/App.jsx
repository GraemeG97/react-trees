import TreeCard from "./assets/Components/TreeCard";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Button from "./assets/Components/Button";

export default function app() {
  return (
    <div className="treecard-container">
      <Header />
      <h1>Cool Trees!</h1>
      <TreeCard
        treeName="Baobab"
        location="Across Africa"
        imgLink="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TreeCard
        treeName="Gnarled Juniper"
        location="Arizona"
        imgLink="https://media.cntraveller.com/photos/611bf4e2f6bd8f17556db944/master/w_1600%2Cc_limit/gettyimages-994569360.jpg"
      />
      <TreeCard
        treeName="Sequoia"
        location="California"
        imgLink="https://images.unsplash.com/photo-1558900812-b4a72552a5f6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Footer />
    </div>
  );
}
