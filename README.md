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


