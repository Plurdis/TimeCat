/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var core_common_pb = require('../../core/common_pb.js');
goog.object.extend(proto, core_common_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ApplicationRequest', null, global);
goog.exportSymbol('proto.ApplicationResponse', null, global);
goog.exportSymbol('proto.TotalTimeRequest', null, global);
goog.exportSymbol('proto.TotalTimeResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TotalTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TotalTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TotalTimeRequest.displayName = 'proto.TotalTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TotalTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.TotalTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TotalTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TotalTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && core_common_pb.TimestampRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TotalTimeRequest}
 */
proto.TotalTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TotalTimeRequest;
  return proto.TotalTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TotalTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TotalTimeRequest}
 */
proto.TotalTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_common_pb.TimestampRange;
      reader.readMessage(value,core_common_pb.TimestampRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TotalTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TotalTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TotalTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TotalTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_common_pb.TimestampRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimestampRange range = 1;
 * @return {?proto.TimestampRange}
 */
proto.TotalTimeRequest.prototype.getRange = function() {
  return /** @type{?proto.TimestampRange} */ (
    jspb.Message.getWrapperField(this, core_common_pb.TimestampRange, 1));
};


/** @param {?proto.TimestampRange|undefined} value */
proto.TotalTimeRequest.prototype.setRange = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.TotalTimeRequest.prototype.clearRange = function() {
  this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TotalTimeRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TotalTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TotalTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TotalTimeResponse.displayName = 'proto.TotalTimeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TotalTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.TotalTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TotalTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TotalTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totaltime: (f = msg.getTotaltime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TotalTimeResponse}
 */
proto.TotalTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TotalTimeResponse;
  return proto.TotalTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TotalTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TotalTimeResponse}
 */
proto.TotalTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTotaltime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TotalTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TotalTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TotalTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TotalTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotaltime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration totalTime = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.TotalTimeResponse.prototype.getTotaltime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.TotalTimeResponse.prototype.setTotaltime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.TotalTimeResponse.prototype.clearTotaltime = function() {
  this.setTotaltime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TotalTimeResponse.prototype.hasTotaltime = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ApplicationRequest.displayName = 'proto.ApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && core_common_pb.TimestampRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ApplicationRequest}
 */
proto.ApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ApplicationRequest;
  return proto.ApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ApplicationRequest}
 */
proto.ApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_common_pb.TimestampRange;
      reader.readMessage(value,core_common_pb.TimestampRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_common_pb.TimestampRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimestampRange range = 1;
 * @return {?proto.TimestampRange}
 */
proto.ApplicationRequest.prototype.getRange = function() {
  return /** @type{?proto.TimestampRange} */ (
    jspb.Message.getWrapperField(this, core_common_pb.TimestampRange, 1));
};


/** @param {?proto.TimestampRange|undefined} value */
proto.ApplicationRequest.prototype.setRange = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ApplicationRequest.prototype.clearRange = function() {
  this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ApplicationRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ApplicationResponse.displayName = 'proto.ApplicationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && core_common_pb.RpcApplication.toObject(includeInstance, f),
    totaltime: (f = msg.getTotaltime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ApplicationResponse}
 */
proto.ApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ApplicationResponse;
  return proto.ApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ApplicationResponse}
 */
proto.ApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_common_pb.RpcApplication;
      reader.readMessage(value,core_common_pb.RpcApplication.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTotaltime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_common_pb.RpcApplication.serializeBinaryToWriter
    );
  }
  f = message.getTotaltime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional RpcApplication application = 1;
 * @return {?proto.RpcApplication}
 */
proto.ApplicationResponse.prototype.getApplication = function() {
  return /** @type{?proto.RpcApplication} */ (
    jspb.Message.getWrapperField(this, core_common_pb.RpcApplication, 1));
};


/** @param {?proto.RpcApplication|undefined} value */
proto.ApplicationResponse.prototype.setApplication = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ApplicationResponse.prototype.clearApplication = function() {
  this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ApplicationResponse.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration totalTime = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.ApplicationResponse.prototype.getTotaltime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.ApplicationResponse.prototype.setTotaltime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ApplicationResponse.prototype.clearTotaltime = function() {
  this.setTotaltime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ApplicationResponse.prototype.hasTotaltime = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);
