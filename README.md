# nginx_aLL_loadBalancer_nodejs_ssl_docker
### launch rhel 9 on ce2
![image](https://user-images.githubusercontent.com/40553867/206892222-a178c37d-25ca-4cbd-a3ce-254aac835c97.png)
![image](https://user-images.githubusercontent.com/40553867/206892240-6620ec3a-6fbd-420b-8b9b-d3f7b498cd4c.png)
![image](https://user-images.githubusercontent.com/40553867/206892255-ed39be9f-a462-42ab-9ea0-f94a8368de8b.png)
![image](https://user-images.githubusercontent.com/40553867/206892260-eafc8cb2-9565-4d76-9a13-e186b3e56433.png)
![image](https://user-images.githubusercontent.com/40553867/206892266-89fc7c56-2667-4b97-bd53-4ccad29560d9.png)
![image](https://user-images.githubusercontent.com/40553867/206892274-c3b48947-c73c-474a-8c18-082d69b09183.png)
![image](https://user-images.githubusercontent.com/40553867/206892292-9ee2b5b0-33d5-4631-ad68-2567c6a88020.png)
![image](https://user-images.githubusercontent.com/40553867/206892307-581e34bf-7dd9-4ab5-9b1e-befb04ffe295.png)
![image](https://user-images.githubusercontent.com/40553867/206892330-8f3281fa-acde-4df5-b3ae-38241daeee39.png)
###install docker 
https://www.server-world.info/en/note?os=CentOS_Stream_9&p=docker&f=1
![image](https://user-images.githubusercontent.com/40553867/206893422-c23fb4d5-de04-4d20-8684-db82a7589905.png)
### git install 
```
yum install git -y
```
![image](https://user-images.githubusercontent.com/40553867/206893761-8adf2b5e-01a6-40a2-9a4c-7a009f01ee79.png)
## docker file
![image](https://user-images.githubusercontent.com/40553867/206894735-81ab1cd6-2ed8-41db-8324-790d28b1065a.png)
### crete image and run container
![image](https://user-images.githubusercontent.com/40553867/206894956-caf54c1e-a365-4d1e-ac60-cc5d844a7bc0.png)

```
docker image build -t node:1 . --progress=plain
```
```
docker container run -itd -p 5000:5000 node:1 
```
### inbound rule 5000
![image](https://user-images.githubusercontent.com/40553867/206894864-2fe18fea-51dd-4211-9ff7-3a55a20f0c5b.png)

![image](https://user-images.githubusercontent.com/40553867/206895147-08bf8d2e-7ce1-42a1-917d-f6e189aa62f0.png)

![image](https://user-images.githubusercontent.com/40553867/206895154-9408974d-6f0f-4c1f-a4cf-c46fc9b3f541.png)
![image](https://user-images.githubusercontent.com/40553867/206895176-84872148-030b-4374-ab5d-4dd62f94ea4b.png)

![image](https://user-images.githubusercontent.com/40553867/206895214-4bb07531-0335-42f3-b3fa-408aa9e81cca.png)


![image](https://user-images.githubusercontent.com/40553867/206895353-f563cde6-f2fa-47cb-bf6f-e56318c6ccfb.png)

### we have create similair 3 docker container 
![image](https://user-images.githubusercontent.com/40553867/206896367-c7c0f116-997d-4b92-81a9-78164d6a27d5.png)

![image](https://user-images.githubusercontent.com/40553867/206896905-07275e0c-7b9d-48ce-afac-93a30227105c.png)
![image](https://user-images.githubusercontent.com/40553867/206896917-673b36bf-4efb-4f7b-b85c-d5360b8ec1f0.png)
![image](https://user-images.githubusercontent.com/40553867/206896919-7c0dda3a-799e-4932-bf99-0d7a7e673c3c.png)

### now nginx start
#### repo of nginx
https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/
![image](https://user-images.githubusercontent.com/40553867/206949294-f25068b9-1702-4b93-aea1-c8b89da1f6f8.png)

![image](https://user-images.githubusercontent.com/40553867/206949345-7cbe9af1-e405-4d3a-81f5-1c51c318e02b.png)

## setup nginx
![image](https://user-images.githubusercontent.com/40553867/206951221-7a62587d-9ff9-4aac-ac25-2140f4588a8e.png)
![image](https://user-images.githubusercontent.com/40553867/206951894-a30995fd-7094-4087-b207-6ac309ebd23a.png)
![image](https://user-images.githubusercontent.com/40553867/206952032-a7d43b2d-e81a-4eb8-925d-c39862f69b12.png)
![image](https://user-images.githubusercontent.com/40553867/206952106-31a986b8-52bd-4595-b113-7ad2162f999b.png)
![image](https://user-images.githubusercontent.com/40553867/206952800-46a9408a-1f5e-493a-b5b9-aadaf26380b0.png)
![image](https://user-images.githubusercontent.com/40553867/206956111-4f3c9225-a869-453d-bd99-8c45933ac8b5.png)

![image](https://user-images.githubusercontent.com/40553867/206956137-081ea263-97d1-4e6e-9099-6ed178c81258.png)
![image](https://user-images.githubusercontent.com/40553867/206956163-6adfb1f7-022b-4966-9e31-5b0c4ab323bd.png)
![image](https://user-images.githubusercontent.com/40553867/206956323-ac2caad2-d08b-4788-be1a-119851970b37.png)
![image](https://user-images.githubusercontent.com/40553867/206956340-33bc4b57-c3f9-449f-804d-d270b985a1c1.png)
![image](https://user-images.githubusercontent.com/40553867/206956354-532e6dbf-1754-4b5d-9223-e87e24439fe0.png)
## Choosing a Load-Balancing Method
https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/
 ##### only change in upstream for choosing loadbalancer
#### 1 Round Robin – 
Requests are distributed evenly across the servers, with server weights taken into consideration. This method is used by default (there is no directive for enabling it):

```
upstream lbwithnginx.tk {
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
server {
  listen 80;
  server_name lbwithnginx.tk www.lbwithnginx.tk
  location / {
  proxy_pass http://lbwithnginx.tk;
  }
}
```
#### 2 Least Connections –
A request is sent to the server with the least number of active connections, again with server weights taken into consideration:

```
upstream lbwithnginx.tk {
  least_conn;
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
```
### 3 IP Hash -
The server to which a request is sent is determined from the client IP address. In this case, either the first three octets of the IPv4 address or the whole IPv6 address are used to calculate the hash value. The method guarantees that requests from the same address get to the same server unless it is not available.
```
upstream lbwithnginx.tk {
  ip_hash;
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
```
If one of the servers needs to be temporarily removed from the load‑balancing rotation, it can be marked with the down parameter in order to preserve the current hashing of client IP addresses. Requests that were to be processed by this server are automatically sent to the next server in the group:
### 4 Generic Hash -
Generic Hash – The server to which a request is sent is determined from a user‑defined key which can be a text string, variable, or a combination. For example, the key may be a paired source IP address and port, or a URI as in this example:

```
upstream lbwithnginx.tk {
  hash $request_uri consistent;
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
```
The optional consistent parameter to the hash directive enables ketama consistent‑hash load balancing. Requests are evenly distributed across all upstream servers based on the user‑defined hashed key value. If an upstream server is added to or removed from an upstream group, only a few keys are remapped which minimizes cache misses in the case of load‑balancing cache servers or other applications that accumulate state.
### 5 Least Time - 
(NGINX Plus only) – For each request, NGINX Plus selects the server with the lowest average latency and the lowest number of active connections, where the lowest average latency is calculated based on which of the following parameters to the least_time directive is included:

+ header – Time to receive the first byte from the server
+ last_byte – Time to receive the full response from the server
+ last_byte inflight – Time to receive the full response from the server, taking into account incomplete requests

```
upstream lbwithnginx.tk {
  least_time header;
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
```

### 6 Random – 
Each request will be passed to a randomly selected server. If the two parameter is specified, first, NGINX randomly selects two servers taking into account server weights, and then chooses one of these servers using the specified method:

+ least_conn – The least number of active connections
+ least_time=header (NGINX Plus) – The least average time to receive the response header from the server ($upstream_header_time)
+ least_time=last_byte (NGINX Plus) – The least average time to receive the full response from the server ($upstream_response_time)

upstream lbwithnginx.tk {
  random two least_time=last_byte;
  server 127.0.0.1:5000;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
The Random load balancing method should be used for distributed environments where multiple load balancers are passing requests to the same set of backends. For environments where the load balancer has a full view of all requests, use other load balancing methods, such as round robin, least connections and least time.

## Server Weights
By default, NGINX distributes requests among the servers in the group according to their weights using the Round Robin method. The weight parameter to the server directive sets the weight of a server; the default is 1:
```
upstream lbwithnginx.tk {
  server 127.0.0.1:5000 weight=5;
  server 127.0.0.1:5001;
  server 127.0.0.1:5002;
}
```
if 7 request comming so 5 request to 5000 and remaining to 5001 and 5002

## adding ssl
https://github.com/krishna-gbu/add_ssl_in_website_nginx_and_route_53

