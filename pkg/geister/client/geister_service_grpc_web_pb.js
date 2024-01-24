/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: geister_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./geister_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GeisterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GeisterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StartRequest,
 *   !proto.StartResponse>}
 */
const methodDescriptor_GeisterService_Start = new grpc.web.MethodDescriptor(
  '/GeisterService/Start',
  grpc.web.MethodType.UNARY,
  proto.StartRequest,
  proto.StartResponse,
  /**
   * @param {!proto.StartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartResponse.deserializeBinary
);


/**
 * @param {!proto.StartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.StartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GeisterServiceClient.prototype.start =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GeisterService/Start',
      request,
      metadata || {},
      methodDescriptor_GeisterService_Start,
      callback);
};


/**
 * @param {!proto.StartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartResponse>}
 *     Promise that resolves to the response
 */
proto.GeisterServicePromiseClient.prototype.start =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GeisterService/Start',
      request,
      metadata || {},
      methodDescriptor_GeisterService_Start);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetGameStateRequest,
 *   !proto.GetGameStateResponse>}
 */
const methodDescriptor_GeisterService_GetGameState = new grpc.web.MethodDescriptor(
  '/GeisterService/GetGameState',
  grpc.web.MethodType.UNARY,
  proto.GetGameStateRequest,
  proto.GetGameStateResponse,
  /**
   * @param {!proto.GetGameStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetGameStateResponse.deserializeBinary
);


/**
 * @param {!proto.GetGameStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetGameStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetGameStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GeisterServiceClient.prototype.getGameState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GeisterService/GetGameState',
      request,
      metadata || {},
      methodDescriptor_GeisterService_GetGameState,
      callback);
};


/**
 * @param {!proto.GetGameStateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetGameStateResponse>}
 *     Promise that resolves to the response
 */
proto.GeisterServicePromiseClient.prototype.getGameState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GeisterService/GetGameState',
      request,
      metadata || {},
      methodDescriptor_GeisterService_GetGameState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateGameStateByPlayerMoveRequest,
 *   !proto.UpdateGameStateByPlayerMoveResponse>}
 */
const methodDescriptor_GeisterService_UpdateGameStateByPlayerMove = new grpc.web.MethodDescriptor(
  '/GeisterService/UpdateGameStateByPlayerMove',
  grpc.web.MethodType.UNARY,
  proto.UpdateGameStateByPlayerMoveRequest,
  proto.UpdateGameStateByPlayerMoveResponse,
  /**
   * @param {!proto.UpdateGameStateByPlayerMoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateGameStateByPlayerMoveResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateGameStateByPlayerMoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UpdateGameStateByPlayerMoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateGameStateByPlayerMoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GeisterServiceClient.prototype.updateGameStateByPlayerMove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GeisterService/UpdateGameStateByPlayerMove',
      request,
      metadata || {},
      methodDescriptor_GeisterService_UpdateGameStateByPlayerMove,
      callback);
};


/**
 * @param {!proto.UpdateGameStateByPlayerMoveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateGameStateByPlayerMoveResponse>}
 *     Promise that resolves to the response
 */
proto.GeisterServicePromiseClient.prototype.updateGameStateByPlayerMove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GeisterService/UpdateGameStateByPlayerMove',
      request,
      metadata || {},
      methodDescriptor_GeisterService_UpdateGameStateByPlayerMove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateGameStateByCpuMoveRequest,
 *   !proto.UpdateGameStateByCpuMoveResponse>}
 */
const methodDescriptor_GeisterService_UpdateGameStateByCpuMove = new grpc.web.MethodDescriptor(
  '/GeisterService/UpdateGameStateByCpuMove',
  grpc.web.MethodType.UNARY,
  proto.UpdateGameStateByCpuMoveRequest,
  proto.UpdateGameStateByCpuMoveResponse,
  /**
   * @param {!proto.UpdateGameStateByCpuMoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateGameStateByCpuMoveResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateGameStateByCpuMoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UpdateGameStateByCpuMoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateGameStateByCpuMoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GeisterServiceClient.prototype.updateGameStateByCpuMove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GeisterService/UpdateGameStateByCpuMove',
      request,
      metadata || {},
      methodDescriptor_GeisterService_UpdateGameStateByCpuMove,
      callback);
};


/**
 * @param {!proto.UpdateGameStateByCpuMoveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateGameStateByCpuMoveResponse>}
 *     Promise that resolves to the response
 */
proto.GeisterServicePromiseClient.prototype.updateGameStateByCpuMove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GeisterService/UpdateGameStateByCpuMove',
      request,
      metadata || {},
      methodDescriptor_GeisterService_UpdateGameStateByCpuMove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteGameStateWhenGameIsOverRequest,
 *   !proto.DeleteGameStateWhenGameIsOverResponse>}
 */
const methodDescriptor_GeisterService_DeleteGameStateWhenGameIsOver = new grpc.web.MethodDescriptor(
  '/GeisterService/DeleteGameStateWhenGameIsOver',
  grpc.web.MethodType.UNARY,
  proto.DeleteGameStateWhenGameIsOverRequest,
  proto.DeleteGameStateWhenGameIsOverResponse,
  /**
   * @param {!proto.DeleteGameStateWhenGameIsOverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteGameStateWhenGameIsOverResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteGameStateWhenGameIsOverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DeleteGameStateWhenGameIsOverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteGameStateWhenGameIsOverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GeisterServiceClient.prototype.deleteGameStateWhenGameIsOver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GeisterService/DeleteGameStateWhenGameIsOver',
      request,
      metadata || {},
      methodDescriptor_GeisterService_DeleteGameStateWhenGameIsOver,
      callback);
};


/**
 * @param {!proto.DeleteGameStateWhenGameIsOverRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteGameStateWhenGameIsOverResponse>}
 *     Promise that resolves to the response
 */
proto.GeisterServicePromiseClient.prototype.deleteGameStateWhenGameIsOver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GeisterService/DeleteGameStateWhenGameIsOver',
      request,
      metadata || {},
      methodDescriptor_GeisterService_DeleteGameStateWhenGameIsOver);
};


module.exports = proto;
