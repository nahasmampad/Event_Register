const mongoos = require("mongoose");

const seatSchema = new mongoos.Schema(
  {
    seatNo: {
      type: String,
      required: true,
    },
    applicant: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    registerId:{
        type: String,
        default: null
    }

  },
  {
    timestamps: true,
  }
);

const SeatModel = mongoos.model("seat", seatSchema);

module.exports = SeatModel;
