import ContactItem from "./ContactItem";

function ContactList({ Forms, deleteHandler }) {
  return (
    <div className="w-[80%] lg:w-[60%] px-1  xl:w-[80%] mb-60">
      <div className=" text-center lg:text-start lg:ms-8 ">
        <h1 className="font-bold text-2xl text-blue-950 mt-14">
          Contacts List
        </h1>
      </div>
      <div className="border-2 border-purple-500/50 bg-white text-center py-4 mt-6 rounded-md">
        {Forms.length ? (
          <ul>
            {Forms.map((Form) => (
              <ContactItem
                key={Form.id}
                Forms={Form}
                deleteHandler={deleteHandler}
              />
            ))}
          </ul>
        ) : (
          <p className="text-md font-bold text-blue-950 ">No Contact</p>
        )}
      </div>
    </div>
  );
}

export default ContactList;
