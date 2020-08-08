import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];
    
const blog = new BlogBuilder({
  title: "My First Blog",
  image: "img",
  description:
    "Test",
})
  .addHeading("Heading")
  .addParagraph(
    "Test1"
  )
  .addParagraph(
    "Test3"
  );

const blog1 = new BlogBuilder({
  title: "My Second Blog",
  image: "img",
  description:
    "Test1",
})
  .addHeading("Heading")
  .addParagraph(
    "Test2"
  )
  .addParagraph(
    "TEst3"
  )
  .addHeading("New Heading")
  .addParagraph(
    "Test4"
  )
  .addParagraph(
    "Tes5"
  );

bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
