
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  password: 'password',
  address: 'address',
  has_account: 'has_account',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  parent_category_id: 'parent_category_id',
  title: 'title',
  description: 'description',
  handle: 'handle',
  mpath: 'mpath',
  is_active: 'is_active',
  rank: 'rank',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  handle: 'handle',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.TypeScalarFieldEnum = {
  id: 'id',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  title: 'title',
  handle: 'handle',
  description: 'description',
  status: 'status',
  thumbnail: 'thumbnail',
  weight: 'weight',
  length: 'length',
  height: 'height',
  width: 'width',
  material: 'material',
  category_id: 'category_id',
  collection_id: 'collection_id',
  type_id: 'type_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  rank: 'rank',
  product_id: 'product_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ProductTagScalarFieldEnum = {
  product_id: 'product_id',
  tag_id: 'tag_id'
};

exports.Prisma.OptionScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  title: 'title',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.OptionValueScalarFieldEnum = {
  id: 'id',
  option_id: 'option_id',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.VariantScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  title: 'title',
  price: 'price',
  sale_price: 'sale_price',
  sku: 'sku',
  stock: 'stock',
  barcode: 'barcode',
  weight: 'weight',
  length: 'length',
  height: 'height',
  width: 'width',
  material: 'material',
  rank: 'rank',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.OptionVariantScalarFieldEnum = {
  variant_id: 'variant_id',
  option_value_id: 'option_value_id'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  value: 'value',
  min_order_value: 'min_order_value',
  usage_limit: 'usage_limit',
  used_count: 'used_count',
  is_automatic: 'is_automatic',
  type: 'type',
  status: 'status',
  starts_at: 'starts_at',
  ends_at: 'ends_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  promotion_id: 'promotion_id',
  version: 'version',
  is_draft_order: 'is_draft_order',
  email: 'email',
  shipping_address: 'shipping_address',
  subtotal: 'subtotal',
  discount_total: 'discount_total',
  shipping_total: 'shipping_total',
  total: 'total',
  payment_status: 'payment_status',
  order_status: 'order_status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  canceled_at: 'canceled_at'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  item_id: 'item_id',
  quantity: 'quantity',
  unit_price: 'unit_price',
  unit_total: 'unit_total',
  product_title: 'product_title',
  product_thumbnail: 'product_thumbnail',
  variant_sku: 'variant_sku',
  variant_title: 'variant_title',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  email: 'email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  completed_at: 'completed_at'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cart_id: 'cart_id',
  item_id: 'item_id',
  quantity: 'quantity',
  unit_price: 'unit_price',
  unit_total: 'unit_total',
  product_title: 'product_title',
  product_thumbnail: 'product_thumbnail',
  variant_sku: 'variant_sku',
  variant_title: 'variant_title',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ProductStatus = exports.$Enums.ProductStatus = {
  Draft: 'Draft',
  Published: 'Published'
};

exports.PromotionType = exports.$Enums.PromotionType = {
  Fixed: 'Fixed',
  Percent: 'Percent'
};

exports.PromotionStatus = exports.$Enums.PromotionStatus = {
  Draft: 'Draft',
  Active: 'Active',
  Inactive: 'Inactive'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  Canceled: 'Canceled',
  NotPaid: 'NotPaid',
  Awaiting: 'Awaiting',
  Captured: 'Captured',
  Refunded: 'Refunded'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  Pending: 'Pending',
  Completed: 'Completed',
  Canceled: 'Canceled'
};

exports.Prisma.ModelName = {
  User: 'User',
  Customer: 'Customer',
  Category: 'Category',
  Collection: 'Collection',
  Type: 'Type',
  Product: 'Product',
  Image: 'Image',
  Tag: 'Tag',
  ProductTag: 'ProductTag',
  Option: 'Option',
  OptionValue: 'OptionValue',
  Variant: 'Variant',
  OptionVariant: 'OptionVariant',
  Promotion: 'Promotion',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Cart: 'Cart',
  CartItem: 'CartItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
