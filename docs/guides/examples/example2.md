---
sidebar_position: 2
---

# 예제 2: 고급 사용법

고급 사용 예제를 살펴봅시다.

## 비동기 처리

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

## 에러 처리

```javascript
try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  console.error('Error:', error);
}
```


