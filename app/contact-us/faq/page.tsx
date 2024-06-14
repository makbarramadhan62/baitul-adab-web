import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Faq() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full px-4 lg:px-16 flex flex-col gap-8 items-center justify-center mb-8 mt-24 lg:mt-32">
        <span className="text-neutral text-8xl font-bold">FAQ</span>
        <div className="flex flex-col w-full lg:w-3/4 gap-4">
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I choose my meals?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              When will I receive my order?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I skip a delivery?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I add Extras to my delivery?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
