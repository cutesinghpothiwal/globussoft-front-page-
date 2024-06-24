import React from "react";
import "./workethic.css";
import socioboard from "./socioboard.png";
import cure from "./cure.png";
import gramboard from "./gramboard.png";
import grocbasket from "./grocbasket.png";
import socioleads from "./socioleads.png";
import bow from "./bow.png";
import brain from "./brain.png";
import space from "./space.png";
import brandzter from "./brandzter.jpg";

function WorkEthic() {
  return (
    <div className="flex justify-center">
      <div className="workethic-container w-full px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            How We <span className="text-blue-500">Deliver</span> Our Best
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-4">
            Globussoft aims at constantly developing itself and accepting
            challenges to provide the best services that cater to the needs of
            its customers.
          </p>
        </div>

        <div className="flex items-start justify-center w-full"></div>

        <div className="mt-12 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="card">
            <p className="card-title">SOCIOBOARD</p>
            <img src={socioboard} alt="" />
            <p className="small-desc">
              Get leads on your business website through social media with our
              engagement automation platform.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">GROCBASKET</p>
            <img src={grocbasket} alt="" />
            <p className="small-desc">
              Provide your customers with the convenience of shopping for
              groceries with a simple click.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">SOCIOLEADS</p>
            <img src={socioleads} alt="" />
            <p className="small-desc">
              Convert your website into a sales machine by getting leads from
              Facebook and Linkedin.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">GRAMBOARD.AI</p>
            <img src={gramboard} alt="" />
            <p className="small-desc">
              Autopilot all your marketing tasks on Instagram and skyrocket your
              engagement in the most hassle-free way.{" "}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">CURE 24X7</p>
            <img src={cure} alt="" />
            <p className="small-desc">
              Schedule your appointment and consult with the doctor of your
              choice at your own convenience by simply sitting at home.{" "}
            </p>{" "}
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>

          <div className="card">
            <p className="card-title">BRAIN MONSTER</p>
            <img src={brain} alt="" />
            <p className="small-desc">
              Get a variety of mind Games, which increases your attention and
              boosts memory.{" "}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">BRANDZTER</p>
            <img src={brandzter} alt="" />
            <p className="small-desc">
              Keep your brand name safe from getting misused and track where it
              appears on the Internet, without any manual work.{" "}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>

          <div className="card">
            <p className="card-title">SPACE DEBRIS</p>
            <img src={space} alt="" />
            <p className="small-desc">
              Enter into a world of fantasy beyond the realm of the solar
              system. Tap to fly anywhere in the debris.{" "}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>


          <div className="card">
            <p className="card-title">BOW HUNTING</p>
            <img src={bow} alt="" />
            <p className="small-desc">
            Entertaining Game with superb graphics for hunting birds.    </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkEthic;
