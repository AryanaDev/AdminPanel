import HardItems from "../../components/Elements/hardItems";
import SimpleItems from "../../components/Elements/simpleItems";
import {menuData} from "../../components/data/menuData";

export default function Menu() {

    return (

        <div className="w-full flex flex-col">
            <div className="w-[300px] text-black flex-col bg-amber-300 h-screen justify-items-center">
                <h1 className="mt-5 text-2xl">Dashboard</h1>
                <div  className="text-white bg-amber-300 w-full h-screen mt-6">
                    {menuData.map((item, index) => (
                        item.is_parent ? (
                            <HardItems key={index} item={item} />
                        ) : (
                            <SimpleItems key={index} item={item} />
                        )
                    ))}

                </div>

                </div>
            </div>
            );
            }
