import React from "react";
import CharBlogPost from "./CharBlogPost";
export default function CharNew() {
  return (
    <main className="py-8 flex flex-wrap lg:flex-nowrap w-full gap-8">
      <section className="bg-no-repeat lg:sticky lg:top-28 bg-[url('https://www.blippo.com/cdn/shop/files/character-news-blog.jpg?v=1685430822')] bg-center bg-cover h-[400px] lg:h-[800px] rounded-3xl flex items-end   w-full">
        <article className="bg-white/80 w-full m-10 text-center px-4 md:px-24 py-8 rounded-3xl flex flex-col gap-4">
          <h3 className=" text-ThemeMainPink font-extrabold  text-2xl lg:text-4xl">
            CHARACTER NEWS
          </h3>
          <p className="text-ThemeGray">
            Learn more fun details about our kawaii pals!
          </p>
          <p className="underline text-ThemeMainPink cursor-pointer">
            All articles
          </p>
        </article>
      </section>
      <section className="w-full">
        <ul className="flex flex-col ">
          <CharBlogPost
            text="Born with a funny bone, Hangyodon is a unique kawaii character from Sanrio. This sensitive little cutie is part-fish, part man! "
            title="Hang Out With Hangyodon!"
            image="https://www.blippo.com/cdn/shop/articles/hangyodon-featured-image2_900x.jpg?v=1691986778"
          />
          <CharBlogPost
            title="Time to See the Sentimental Circus!"
            text="Abandoned in the corners of recess rooms and streets, the Sentimental Circus is a group of stuffed toys that come to life under the cover of night! Created by San-X, these forgotten plushies gather together to put on a magic show for everyone to see."
            image="https://www.blippo.com/cdn/shop/articles/sentimental_circus_large_fb38c7f3-f017-42d9-865f-004a3a1cce6d_900x.jpg?v=1691573723"
          />
          <CharBlogPost
            title="Let's Be Lazy With Gudetama"
            text="Gudetama is the lazy egg that everyone loves!  This forever-tired egg drop from Sanrio is super popular because of how relatable it is. Gudetama knows that life is hard, and that’s why it just doesn’t want to get moving."
            image="https://www.blippo.com/cdn/shop/articles/gudetama-cooking-series_copy_900x.jpg?v=1690515636"
          />
        </ul>
      </section>
    </main>
  );
}
