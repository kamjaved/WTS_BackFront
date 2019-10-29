import * as types from "../../_actions/types";

const initialSupplier = {
  supplier: null,
  suppliers: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(supplier = initialSupplier, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SUPPLIER:
      return {
        ...supplier,
        supplier: payload,
        loading: false
      };
    case types.GET_SUPPLIERS:
      return {
        ...supplier,
        suppliers: payload,
        loading: false
      };
    case types.ADD_SUPPLIER:
      return {
        ...supplier,
        supplier: payload,
        loading: false
      };
    case types.SET_CURRENT_SUPPLIER:
      return {
        ...supplier,
        supplier: action.payload
      };
    case types.CLEAR_SUPPLIER:
      return {
        ...supplier,
        supplier: null,
        suppliers: [],
        loading: false
      };

    // case types.FILTER_STAFF:
    //   return {
    //     ...supplier,
    //     filtered: supplier.suppliers.filter(supplier => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return (
    //         staff.firstName.match(regex) ||
    //         staff.lastName.match(regex) ||
    //         staff.email.match(regex) ||
    //         staff.mobile.match(regex) ||
    //         staff.username.match(regex)
    //       );
    //     })
    //   };
    case types.CLEAR_FILTER:
      return {
        ...supplier,
        filtered: null
      };
    case types.DELETE_SUPPLIER:
      return {
        ...supplier,
        suppliers: supplier.suppliers.filter(
          supplier => supplier._id !== action.payload
        ),
        loading: false
      };
    case types.SUPPLIER_ERROR:
      return {
        ...supplier,
        error: payload,
        loading: false
      };
    default:
      return supplier;
  }
}
