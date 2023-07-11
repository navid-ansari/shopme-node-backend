/**
 * https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/
 * https://restfulapi.net/http-methods/
 *
 * GET:
 *  200 (OK): return the requested resource
 *
 * POST
 *  200 (OK): Many times, the action performed by the POST method might not result in a resource that can be identified by
 *  a URI. In this case, either HTTP response code 200 (OK) or 204 (No Content) is the appropriate response status.
 *                body:{
 *                  // newly created resource object
 *               }
 *  201 (Created): The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or
 *               more new resources being created. The primary resource created by the request is identified by either a
 *               Location header field in the response. This means that you would include a Location in the response
 *               header that gives the URL of where you can find the newly created resource.
 *               Now, the response body is totally your choice, But typically engineers return reference to the newly
 *               created resource such as id or url.
 *               header:
 *                 HTTP/1.1 201 Created
 *                 Date: Sat, 02 Apr 2016 12:22:40 GMT
 *                 Location: http://stackoverflow.com/a/36373586/12597
 *               body:{
 *                  id: 123
 *                  url: "http://www.appdomain.com/users/123"
 *               }
 *  204 (No Content): Many times, the action performed by the POST method might not result in a resource that can be
 *                    identified by a URI. In this case, either HTTP response code 200 (OK) or 204 (No Content) is the
 *                    appropriate response status.
 *
 * PUT
 *  200 (OK): If an existing resource is modified, either the 200 (OK) or 204 (No Content) response codes SHOULD be
 *                 sent to indicate successful completion of the request.
 *          body:{
 *                  id: 123
 *                  url: "http://www.appdomain.com/users/123"
 *          }
 *  201 (Created): If a new resource has been created by the PUT API, the origin server MUST inform the user agent via the HTTP
 *          response code 201 (Created) response.
 *          body:{
 *                  id: 123
 *                  url: "http://www.appdomain.com/users/123"
 *          }
 *          or
 *          body:{
 *                  // newly created object
 *          }
 *  204 (No Content): If an existing resource is modified, either the 200 (OK) or 204 (No Content) response codes SHOULD
 *                    be sent to indicate successful completion of the request.
 *
 * PATCH
 *  200 (OK): If partial updates are successfull using patch request the 200 (OK) response codes SHOULD be sent to
 *            indicate successful completion of the request.
 *          body:{
 *              //modified resource object
 *          }
 *  204 (Accepted): The status should be 204 (No Content) if the action has been performed but the response does
 *                  not include an entity.
 *
 * DALETE
 *  200 (OK): If an existing resource is modified, either the 200 (OK) or 204 (No Content) response codes SHOULD be
 *                 sent to indicate successful completion of the request.
 *          body:{
 *                  id: 123
 *                  url: "http://www.appdomain.com/users/123"
 *          }
 *  202 (Accepted): The status should be 202 (Accepted) if the action has been queued.
 *  204 (No Content): The status should be 204 (No Content) if the action has been performed but the response does
 *                    not include an entity.
 * Error Codes:
 *  400 (Bad Request): The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed
 *                     request syntax, invalid request message framing, or deceptive request routing).
 *  401 (Unauthorized): Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client
 *                      must authenticate itself to get the requested response.
 *  403 (Forbidden): The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the
 *                   requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 *  404 (Not Found): The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also
 *                   mean that the endpoint is valid but the resource itself does not exist.
 *  405 (Method Not Allowed): The request method is known by the server but is not supported by the target resource. For example, an API may not
 *                            allow calling DELETE to remove a resource.
 *  408 (Request Timeout):
 *
 *  500 (Internal Server Error): The server has encountered a situation it does not know how to handle.
 *  502 (Bad Gateway): This error response means that the server, while working as a gateway to get a response needed to handle the request, got an
 *                     invalid response.
 *  503 (Service Unavailable): The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is
 *                             overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This
 *                             response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the
 *                             estimated time before the recovery of the service.
 */
