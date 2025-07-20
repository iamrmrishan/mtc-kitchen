"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonialPosts = [
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true&width=500",
    height: "400px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true&width=500",
    height: "300px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fkinkini.weeramanthri%2Fposts%2Fpfbid026Eo9WmdDHjxesbouNPUhjpsuLfy8unj6U67QrNdFQwmznwL2QqwUtduSZb9JdrUYl&show_text=true&width=500",
    height: "350px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0mUNpJt2sqhFFKVgawLydKkmkgzbZYDAy8Vbq2h1VFCGzhtX6FvVW6HnjiFpHjVYSl%26id%3D100000481795987&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmihiranga.thimbiripola%2Fposts%2Fpfbid02Em3pUi1fw9H9zAZHRW2BdjqDNQr6BvujNZA1VhNryJMwAHxBajfWdxNSknaBb9jcl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid025EZCJeSw9o977wwmMrkDEKx5JP3yEESjgHEsLNPfcwYsmDFf3PAYc8r2Dt1o614Ll%26id%3D100011766040233&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmalith.vithanage%2Fposts%2Fpfbid02U213wtPszx5dkXPgXuUbr1cjDTjVyqNdFvYvAfPjjX6gXCcPqU21Hav1fU4gyWUl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmahanama96%2Fposts%2Fpfbid0S2teoJWXWoM7JuvTAhV4xiwjqvXq32f1vfCkAXXDBC4uLWxMtYhUSkZPViRymgoxl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcharith.pussadeniya%2Fposts%2Fpfbid02krmp3b6Bm7Yi4CVc6qtpsnCjxssD5y7sRtjdHqkpiQWsY4SrCf4bcZWc4kXP71Avl&show_text=true&width=500",
    height: "232px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkinkini.weeramanthri%2Fposts%2Fpfbid02oEpRcijGoQBYq1oRefo9nLJWmX2BSghKvjXGyCM11nVtEUBV15xBZfDV9f5PuPvl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid02RDPDovJQExJVDrGE7tTN4cETk9ApXbRTwuftSHQTsWrc5dp6bHLStHub8muE4mVil&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvipulika.fernando%2Fposts%2Fpfbid02ZopUN8YuADoVetZTLfhi4AuZPio4bKm3e92dk63rjHwmZZQswQwo8iKxHJCFN8v9l&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid02r6VBdD1RZLHVYDu17efKtY3Y9jUGwa6N3rVWM1KpYTawHthfiFqpTM4642FpqzGWl&show_text=true&width=500",
    height: "187px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsameeragayan1%2Fposts%2Fpfbid0GFsZH3vfRMtSVbPhPTskavVDcXtdkUUTpUsuey7inhsRgVfckbFCC9FL5Q2xjgtwl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0qo1mr19eSwoMrkbnMczFkoK54JYGdh2Qm4Hqd8yYbpgQSNNsFnebrCQsq2Z5rdatl%26id%3D100011861337088&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid032zvf9pLFGH2iTpSxf81tgYtDuuJV9bbDFsjtH2ME93wMQJjrRTdfpfWwxxZw9nAl&show_text=true&width=500",
    height: "185px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbmaitipe%2Fposts%2Fpfbid0ftMG6L6TXc36sgut5htTNZuPKumg4QH3VDuzN1kfXQ9dCY1P2anc5u8smmVCLJAHl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flhliyanage%2Fposts%2Fpfbid0MxT92XWTbNinn6gY4VBnrwxixFy9AeyVrRFUnkrtwXvYJguvHxWuhdYJZCf5XZGEl&show_text=true&width=500",
    height: "168px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeeth.aloka.gunathilaka%2Fposts%2Fpfbid0hDnDwFqmafTx26u7qUGUdgtVNHXYWCF3AUBNGezYYDeEiRQMnYKbmNzj855d6VCSl&show_text=true&width=500",
    height: "250px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fushan.chamikara.2025%2Fposts%2Fpfbid04sv6RZhh7th3Nmr9LaMm5gb5rvyRTSkk5NgnRvCT4i5HZvfLnZEeboCXK6voLK7Sl&show_text=true&width=500",
    height: "185px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchamod.lakshitha.77%2Fposts%2Fpfbid02Zr7Ty9m4pFjaprEBb4YdpLCipHhgG2BXczWoQaAWnNbLd92sCyEZmrYzu7VEKQKRl&show_text=true&width=500",
    height: "185px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthilan.avishka.339411%2Fposts%2Fpfbid02h3QR6nF1xTRfusa5MohM6NrDUxf8dHfGrxra28iuFM58cbeVY55drTcKvhgeZqwXl&show_text=true&width=500",
    height: "185px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchandula.nethmal%2Fposts%2Fpfbid0jnCMjStPQ3ac5NWyznvKcUmxUyWgmyVvxV3Qpua3ziTauuK4s53Nu9CN1Ke2axuSl&show_text=true&width=500",
    height: "168px",
  },
];

export function TestimonialCarousel() {
  return (
    <div
      id="fb-reviews"
      className="max-w-6xl mx-auto text-center relative mt-2 sm:mt-5"
    >
      <p
        style={{ color: "#3B6095" }}
        className="text-xs tracking-wider uppercase mb-2"
      >
        We&apos;re Just a Click Away
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
        Facebook Reviews
      </h1>

      {/* Continuous Scrolling Container */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-4 animate-scroll"
          style={{
            animation: "scroll 120s linear infinite",
            width: "fit-content",
          }}
        >
          {/* First set of reviews */}
          {testimonialPosts.map((post, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 sm:w-96">
              <Card className="w-full">
                <CardContent className="p-0">
                  <iframe
                    src={post.url}
                    height={post.height}
                    width="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    allow="encrypted-media"
                    className="w-full"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonialPosts.map((post, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex-shrink-0 w-80 sm:w-96"
            >
              <Card className="w-full">
                <CardContent className="p-0">
                  <iframe
                    src={post.url}
                    height={post.height}
                    width="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    allow="encrypted-media"
                    className="w-full"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
