import BBSCardList from "./components/home/BBS/BBSCardList";
import LoginComponent from "./components/home/Login/LoginComponent";

export default function Home() {
  return (
    <main className="">
      <LoginComponent></LoginComponent>
      <BBSCardList></BBSCardList>
    </main>
  );
}
