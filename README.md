
# BikeRentalAPi



## Indices

* [Default](#default)

  * [http://localhost:8000/Trip/RecentData?ids=56,58,60](#1-http:localhost:8000triprecentdata?ids=56,58,60)
  * [http://localhost:8000/Trip/CountAgeGroup?ids=56&ids=58&ids=60&date=2019-04-01](#2-http:localhost:8000tripcountagegroup?ids=56&ids=58&ids=60&date=2019-04-01)
  * [http://localhost:8000/Station/2](#3-http:localhost:8000station2)


--------


## Default



### 1. http://localhost:8000/Trip/RecentData?ids=56,58,60


retruns most recent 20 trip informations by trip ended station ids


***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: http://localhost:8000/Trip/RecentData
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg0MzU2NTYyfQ.t9tKgCIecHq9iHEKR5Vezb2RBmJhU4YorzgW3GH9d9E |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| ids | 56,58,60 |  |



### 2. http://localhost:8000/Trip/CountAgeGroup?ids=56&ids=58&ids=60&date=2019-04-01


Returns counts by age group by trip ended station id and trip ended date


***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: http://localhost:8000/Trip/CountAgeGroup
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg0MzU2NTYyfQ.t9tKgCIecHq9iHEKR5Vezb2RBmJhU4YorzgW3GH9d9E |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| ids | 56 |  |
| ids | 58 |  |
| ids | 60 |  |
| date | 2019-04-01 |  |



### 3. http://localhost:8000/Station/2


Returns station informations by station id


***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: http://localhost:8000/Station/2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg0MzU2NTYyfQ.t9tKgCIecHq9iHEKR5Vezb2RBmJhU4YorzgW3GH9d9E |  |



---
[Back to top](#bikerentalapi)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-03-17 23:16:31 by [docgen](https://github.com/thedevsaddam/docgen)
