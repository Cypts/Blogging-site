import express from "express"

const app= express();
const port= 3000;

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/new_blog",(req,res)=>{
    res.render("new_blog.ejs");
})
app.get("/view_others",(req,res)=>{
    res.render("view_others.ejs",{blogs});
})
app.listen(port,()=>{
    console.log("listening");
})


var blogs=[
    {
        title:"Technology Trends 2025",
        name:"John Doe",
        writes:`Technology is evolving at a rapid pace, and 2025 is expected to bring many new advancements. AI, blockchain, and quantum computing are set to redefine industries. Companies are investing heavily in AI-driven automation, while blockchain is revolutionizing data security. Quantum computing, though in its early stages, promises to solve complex problems much faster than traditional computing. The future holds great potential for integrating these technologies into everyday life, making processes more efficient and intelligent.`
    },
    {
        title:"Healthy Living Tips",
        name:"Jane Smith",
        writes:`Maintaining a healthy lifestyle involves balanced nutrition, regular exercise, and mental well-being. Small habits can lead to big health improvements. Eating whole foods, staying hydrated, and incorporating movement into daily routines are crucial steps. Additionally, mindfulness and proper sleep contribute to overall well-being. Reducing stress and adopting a positive mindset also play a significant role in maintaining good health.`
    },
    {
        title:"Exploring Space: The Next Frontier",
        name:"Dr. Neil",
        writes:`Space exploration is reaching new heights with private companies and international agencies pushing towards Mars and beyond. Advancements in space technology, including reusable rockets and AI-driven research, are making space travel more accessible. The discovery of exoplanets and the search for extraterrestrial life continue to excite scientists and the public alike. The dream of colonizing other planets is becoming closer to reality, thanks to these groundbreaking innovations.`
    },
    {
        title:"The Power of Meditation",
        name:"Lisa Brown",
        writes:`Meditation can improve focus, reduce stress, and enhance overall well-being. A few minutes a day can make a huge difference. Research shows that meditation can help with anxiety, depression, and even chronic pain. Incorporating breathing exercises and mindfulness techniques can amplify its benefits. Regular meditation practice has also been linked to improved emotional stability and enhanced cognitive function.`
    },
    {
        title:"Investment Strategies for 2025",
        name:"Michael Johnson",
        writes:`The financial markets are evolving, and smart investment strategies can help secure financial stability in the coming years. Diversification, risk assessment, and staying informed about economic trends are essential. Cryptocurrencies and sustainable investments are gaining popularity as people look for alternative ways to grow wealth. Long-term planning and understanding market volatility are crucial aspects of making sound investment decisions.`
    },
    {
        title:"Artificial Intelligence in Daily Life",
        name:"Sophia Wilson",
        writes:`AI is no longer just a futuristic concept; it is integrated into daily life through smart assistants, recommendation systems, and automation. AI-powered applications are helping in healthcare, finance, and even personal productivity. Ethical concerns and the impact on jobs remain important discussions in the AI landscape. As AI continues to advance, its role in decision-making and automation will only grow stronger.`
    },
    {
        title:"Best Travel Destinations",
        name:"Chris Evans",
        writes:`From tropical beaches to historical landmarks, discover the best travel destinations to explore this year. Whether you prefer adventure, relaxation, or cultural experiences, there are countless options. Sustainable travel and eco-tourism are becoming increasingly popular, encouraging responsible tourism. Exploring different cultures and cuisines adds to the richness of travel experiences.`
    },
    {
        title:"How to Start Coding",
        name:"Alex Carter",
        writes:`Learning to code can be intimidating, but starting with simple programming languages like Python and JavaScript makes the process easier. Practicing with small projects and utilizing online resources can enhance learning. Understanding problem-solving techniques and algorithms is key to becoming a proficient coder. Developing logical thinking and debugging skills is essential for long-term success in programming.`
    },
    {
        title:"The Rise of Electric Vehicles",
        name:"David Green",
        writes:`Electric vehicles are becoming mainstream, offering an eco-friendly alternative to traditional gasoline-powered cars. Battery technology is improving, leading to longer ranges and shorter charging times. Governments worldwide are incentivizing the adoption of EVs to reduce carbon footprints. The growth of charging infrastructure and advancements in self-driving technology are further shaping the future of mobility.`
    },
    {
        title:"Personal Finance Management",
        name:"Emma Roberts",
        writes:`Effective personal finance management helps individuals save money, invest wisely, and achieve financial freedom. Budgeting, tracking expenses, and planning for retirement are crucial steps. Learning about different investment options and maintaining financial discipline can lead to long-term stability. Avoiding unnecessary debt and making informed financial decisions contribute to a secure financial future.`
    },
    {
        title:"The Future of Renewable Energy",
        name:"Mark Adams",
        writes:`Renewable energy sources like solar and wind power are crucial for a sustainable future and reducing dependence on fossil fuels. Innovations in energy storage and smart grid technology are making renewable energy more reliable. Governments and corporations are investing in clean energy to combat climate change. The transition to renewable energy is essential in reducing greenhouse gas emissions and ensuring environmental sustainability.`
    },
    {
        title:"The Importance of Mental Health Awareness",
        name:"Sarah Lee",
        writes:`Mental health is just as important as physical health. Raising awareness and breaking stigmas can help people seek necessary support. Therapy, self-care practices, and open discussions contribute to a healthier society. Mental well-being should be prioritized in workplaces, schools, and communities. Promoting mental health education and early intervention can prevent more severe issues from developing.`
    },
    {
        title:"Cybersecurity Best Practices",
        name:"Jake Miller",
        writes:`With increasing cyber threats, it is essential to follow best practices to protect personal and professional data from attacks. Using strong passwords, enabling two-factor authentication, and staying updated on security measures are crucial. Cybersecurity awareness helps prevent data breaches and identity theft. Companies and individuals must adopt proactive security measures to stay ahead of evolving cyber threats.`
    },
    {
        title:"The Evolution of Smartphones",
        name:"Oliver Scott",
        writes:`Smartphones have come a long way, from basic communication devices to powerful mini-computers that fit in our pockets. With advancements in AI, 5G, and camera technology, smartphones continue to shape how we interact with the digital world. Future innovations may include foldable designs and enhanced augmented reality experiences. The integration of AI-powered features is making smartphones smarter and more intuitive than ever before.`
    }
];
