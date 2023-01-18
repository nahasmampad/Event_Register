const mongoos = require("mongoose");

const registerSchema = new mongoos.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    mobNo: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    registerd: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    completed:{
      type:Boolean,
      default:false
    }
  },

  {
    timestamps: true,
  }
);

const registerModel = mongoos.model("registres", registerSchema);

module.exports = registerModel;
