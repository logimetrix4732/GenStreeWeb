import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import newsImg from "../assets/images/newsImg.png";
import newsImg1 from "../assets/images/newsImg1.png";

const blogPosts = [
  {
    id: 1,
    image: newsImg,
    date: "21, June 2025",
    title:
      "Smart Villages: Climate insights, Technology Shifting and Transforming Agriculture in India",
    excerpt:
      "India is building smart villages by combining climate-smart farming, new technologies, and better ways to grow crops...",
  },
  {
    id: 2,
    image: newsImg1,
    date: "26, April 2025",
    title:
      'Empowering Women: "From Kharcha to Kaushal: Building Financial Strength Awareness through Technology"',
    excerpt:
      "Before the wave of AI and advanced technology, women managing work-life balance and savings was very complex...",
  },
];

const GenVoice = () => {
  return (
    <>
      <main>
        <NavBar />
        <header className="page-header">
          <div className="inner">
            <div className="container">
              <h1>GenStree AI bulletin</h1>
              <p>
                Experience a free day with GenVoice and explore the benefits of
                the digital world.
              </p>
            </div>
          </div>
        </header>

        <section className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {blogPosts.map((post) => (
                  <div className="post" key={post.id}>
                    <figure className="post-image">
                      <img
                        src={post.image}
                        alt="Image"
                        style={{
                          width: "590px",
                          height: post.id === 2 ? "605px" : "555px",
                          objectFit: "cover",
                        }}
                      />
                    </figure>
                    <div className="post-content">
                      <small className="post-date">{post.date}</small>
                      <h3 className="post-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="post-link">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GenVoice;
