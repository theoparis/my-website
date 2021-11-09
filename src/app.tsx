import { Route, Router } from "wouter";
import { Navbar } from "./components/Navbar";
// import { Logo } from "./logo";
import Me from "./me.jpg";

export const App = () => (
  <div className="bg-gray-800 text-white w-full min-h-screen">
    <Router>
      <header className="bg-gray-900 p-6">
        <Navbar
          brand="Theo Paris Designs"
          links={[
            {
              title: "Home",
              to: "/",
            },
            {
              title: "About",
              to: "/about",
            },
          ]}
        />
      </header>
      <main className="p-6 pl-12 pr-12 flex flex-col justify-center items-start w-2/4">
        <Route path="/">
          <h2 className="text-3xl mb-2">About Me</h2>
          <p className="text-lg mb-2">
            My name is Theo and I'm a 17-year-old programmer, gamer and music
            producer.
          </p>
          <div className="mb-6">
            <img src={Me} className="w-[200px] rounded-lg" />
          </div>

          <h2 className="text-3xl mb-2">What I Am Using</h2>

          <p className="flex-row flex justify-between items-center mb-4">
            <img
              width="32"
              height="32"
              className="mr-2"
              src="https://camo.githubusercontent.com/35e519c3d9ba17a6246288fa065436b7b1bcc4bdf9e29227fd4fd58f0f04aba7/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f7072656163742e737667"
            ></img>
            <img
              width="32"
              height="32"
              className="mr-2"
              src="https://camo.githubusercontent.com/5ae01205835404b14b7551f5e00f8e26a748123dd63a63f372a496c0afe62ae4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f67697465612e737667"
            ></img>
            <img
              width="32"
              height="32"
              className="mr-2"
              src="https://camo.githubusercontent.com/ff660f3b34106793e1a8008592156f3127d8465adc82e103b9f2e0ce012c70ec/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747970657363726970742e737667"
            ></img>
            <img
              width="32"
              height="32"
              className="mr-2"
              src="https://camo.githubusercontent.com/b9279edfece526123a96af67ea002acdd47e84e5ad05126faa08ab3332f8a9ef/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f646f636b65722e737667"
            ></img>
          </p>
          <p className="mb-6">
            I have worked with languages such as Typescript, and frameworks such
            as React, Fastify/Express and Tailwind CSS.
          </p>

          <h2 className="text-3xl mb-2">My Workflow</h2>

          <p className="flex-col flex justify-center items-start mb-2">
            <img
              width="32"
              height="32"
              className="mb-4"
              src="https://camo.githubusercontent.com/99d898c8b4c15d5222488237df9803ce5dd46328184d43eabb1f7452eee5be0b/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f617263685f6c696e75782e737667"
            ></img>
            On my computers I run a operating system called Arch Linux. I have
            the i3 window manager installed, which improves my workflow a ton.
            Having a tiling window manager such as i3 helps me to easily switch
            between windows and virtual desktops, and to keep my windows
            organized. I use neovim as my main code editor.
            <a href="https://gitlab.com/creepinson/my-config">
              <u>You can find more abut my configuration files here</u>.
            </a>
          </p>
        </Route>
      </main>
    </Router>
  </div>
);
