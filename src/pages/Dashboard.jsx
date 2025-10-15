import React from "react";
import Card from "../components/Card";
import { icons } from "../assets/images";
import Chart from "../components/Chart";

const Dashboard = () => {
    const cardData = [
        {
            title: "Customers",
            count: "256",
            image_icon: icons.customers_icon,
        },
        {
            title: "Products",
            count: "6009",
            image_icon: icons.product_icon,
        },
        {
            title: "Sale",
            count: "499",
            image_icon: icons.sale_icon,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 p-2 gap-6">
            {cardData.map((value, index) => (
                // use the spread opreater both work but the code clean with {...}
                <Card key={index} {...value}

                // key={index}
                // title={value.title}
                // count={value.count}
                // image_icon={value.image_icon}
                />
            ))}
            <div className=" w-[960px] h-[350px]">
                <Chart />
            </div>
        </div>
    );
};

export default Dashboard;
