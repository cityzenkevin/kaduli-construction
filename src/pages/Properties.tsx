import { useEffect, useState } from "react";

import Table from "../components/Table";

import { userFields } from "../constants/formFields";
import RemoveModal from "../components/RemoveModal";
import { fields } from "../types";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { HiPlus, HiTrash } from "react-icons/hi2";
import Button from "../components/Button";

const fieldState: fields = {};

userFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = "";
});

export default function Properties() {
  let [addModal, setAddModal] = useState(false);
  let [isRemoveOpen, setIsRemoveOpen] = useState(false);
  let [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedOrg, setselectedOrg] = useState<any>(fieldState);

  const loading = false;
  const handleModal = () => {
    setAddModal(!addModal);
  };

  const handleDeleteModal = () => {
    setIsRemoveOpen(!isRemoveOpen);
  };

  const handleEditModal = () => {
    setIsEditOpen(!isEditOpen);
  };

  useEffect(() => {}, []);

  const columns = [
    {
      Header: `"Property Name"`,
      accessor: "name",
    },

    {
      Header: "Price",
      accessor: "description",
    },
    {
      Header: "Features",
      accessor: "address",
    },
    {
      Header: "Specifications ",
      accessor: "manager.telephone",
    },

    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }: any) => (
        <div className="flex justify-evenly">
          <div
            className="flex ml-6  text-red-500  cursor-pointer hover:text-red-700"
            onClick={() => {
              setselectedOrg(row.original?.id);
              handleDeleteModal();
            }}
          >
            <HiTrash className="w-5 mb-1 " />
            <span className="ml-2 mb-2 cursor-pointer"> {"Delete"} </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-28">
      {/* Add New user Modal */}
      {/* Add New user Modal */}

      {/* Remove user modal */}
      {selectedOrg && (
        <RemoveModal
          title="Delete Property"
          onClose={handleDeleteModal}
          isOpen={isRemoveOpen}
          entity={`/property/${selectedOrg}`}
          onDelete={() => console.log("deleted things")}
          onFetch={() => console.log("fetched properties")}
        />
      )}
      {/* Remove user modal

      {/* Edit user Modal */}

      {/* Edit user Modal */}
      <div className="flex flex-col md:ml-24">
        <div className="md:ml-36 flex mb-5 gap-2">
          <div className="text-primary cursor-pointer">
            <Link to="/dashboard">{"Home"}</Link>
          </div>
          <span>/</span>
          <div>Properties</div>
        </div>
        <div className="md:ml-36 mb-2 flex ">
          <Button
            variant="primary"
            size="md"
            onClick={handleModal}
            style=" p-2 flex rounded-sm text-primary border bg-white border-primary hover:bg-primary hover:text-white shadow-sm 
             duration-300 ease-in-out transition-all"
          >
            <HiPlus className="mt-[2px] w-6 h-5" />
            Add New Property
          </Button>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <Table
            data={[]}
            columns={columns}
            title="Properties"
            placeholder="Find by name, price"
          />
        )}
      </div>
    </div>
  );
}
