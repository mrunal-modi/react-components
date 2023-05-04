
import "./social-contacts.scss";

const SocialContact = ({
  social = [],
  showNames = false,
  title = ""
}) => {
  return (
    <div
      className="social-contacts"
    >
      {title &&
        <div className="title">
          {title}
        </div>
      }
      <div className="social-links">
        {social.map((el, i) =>
          <a className="contactIcons" href={el.link} key={i}>
            {el.icon && el.icon} {(showNames && el.label) ? el.label : ""}
          </a>
        )}
      </div>
    </div>
  );
}

export default SocialContact;