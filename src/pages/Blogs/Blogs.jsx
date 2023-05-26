
const Blogs = () => {
    return (
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-2xl text-justify font-bold">
                            Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?

                        </h1>
                        <p className="py-6">
                            Answer: The refresh tokens can be used to strike a balance between user access requirements and the organizational security procedures. Where access tokens assist users in gaining access to the resources they require to fulfil their duties, but if a hacker manages to acquire them, they could also expose the company to data compromise or other illegal activities.
                        </p>
                        <br />
                        <h1 className="text-2xl text-justify font-bold">
                            Question: Compare SQL and NoSQL databases?
                        </h1>
                        <p className="py-6">
                            Answer: In contrast to NoSQL databases, which are horizontally scalable, SQL databases are. Unlike NoSQL databases, which are document, key-value, graph, or wide-column stores, SQL databases are table-based. While NoSQL databases are better for unstructured data like documents or JSON, SQL databases are more effective for multi-row transactions.
                        </p>
                        <br />
                        <h1 className="text-2xl text-justify font-bold">
                            Question: What is express js? What is Nest JS?
                        </h1>
                        <p className="py-6">
                            Answer: Express is a simple, adaptable, and minimalist framework with a sizable development community. Contrarily, NestJS is a more recent framework that offers more capabilities including dependency injection, a modular architecture, and an easy-to-use CLI.
                        </p>
                        <br />
                        <h1 className="text-2xl text-justify font-bold">
                            Question: What is MongoDB aggregate and how does it work?
                        </h1>
                        <p className="py-6">
                            Answer: MongoDB Aggregation is the process of going through various phases with a huge collection of documents to process them. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.
                        </p>
                        <br />
                    </div>
                </div>
            </div>
    );
};

export default Blogs;