const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-600  hover:text-blue-600 transition-colors duration-200 "
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
