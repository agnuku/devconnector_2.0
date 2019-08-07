const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AmazonMonthPLSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    amazonmonthpl: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users"
        },
        id: {
          type: Schema.Types.ObjectId
        },
        amazon_order_id: {
          type: String
        },
        shipment_date: {
          type: String
        },
        sku: {
          type: String
        },
        product_name: {
          type: String
        },
        quantity_shipped: {
          type: String
        },
        currency: {
          type: String
        },
        item_price: {
          type: String
        },
        item_tax: {
          type: String
        },
        shipping_price: {
          type: String
        },
        shipping_tax: {
          type: String
        },
        gift_wrap_price: {
          type: String
        },
        gift_wrap_tax: {
          type: String
        },
        ship_city: {
          type: String
        },
        ship_state: {
          type: String
        },
        item_promotion_discount: {
          type: String
        },
        ship_promotion_discount: {
          type: String
        },
        fulfillment_channel: {
          type: String
        },
        sales_channel: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },

  { timestamps: true }
);

module.exports = AmazonMonthPL = mongoose.model(
  "amazonmonthpl",
  AmazonMonthPLSchema
);
