import ContactItem from "./ContactItem";

function ContactList({ Forms }) {
    console.log("Forms data:", Forms); // برای دیدن ساختار داده
  return (
    <div>
      {Forms.length ? (
        <ul>
          {Forms.map((Form) => (
            <ContactItem Forms={Form} />
          ))}
        </ul>
      ) : (
        <p>No Contact</p>
      )}
    </div>
  );
}

export default ContactList;
