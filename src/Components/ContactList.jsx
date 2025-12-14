import ContactItem from "./ContactItem";

function ContactList({ Forms }) {
  console.log("Forms data:", Forms); // برای دیدن ساختار داده
  return (
    <div className="w-[80%] mb-60">
      <h1 className="font-bold text-2xl text-blue-950 mt-14">Contacts List</h1>
      <div className="border-2 border-purple-500/50 bg-white text-center py-4 mt-6 rounded-md">
        {Forms.length ? (
          <ul>
            {Forms.map((Form) => (
              <ContactItem key={Form.id} Forms={Form} />
            ))}
          </ul>
        ) : (
          <p className="text-md font-bold">No Contact</p>
        )}
      </div>
    </div>
  );
}

export default ContactList;
