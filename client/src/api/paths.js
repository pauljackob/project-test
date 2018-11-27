const API_URL = 'http://localhost:4000';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': window.location.origin
};

export const getPaths = () => {
  return fetch(`${API_URL}/paths`).then(response => response.json());
};

export const getPath = id => {
  return fetch(`${API_URL}/paths/${id}`).then(response => response.json());
  };

export const createPath = (title,  explanation, exercise, evaluation) => {
  return fetch(`${API_URL}/path`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify()
  }).then(response => response.json());
};

export const deletePath = (id) => {
  return fetch(`${API_URL}/path/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
};

export const updatePath = (id) => {
  return fetch(`${API_URL}/path/${id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify()
  }).then(response => response.json());
};

// [x]GET /api/paths  --> Get all the learning paths
// []GET /api/paths/:path_id --> Get details for a learning path
// [x]DELETE /api/paths/:path_id --> Delete learning path (shallow)
// [x]PATCH /api/paths/:path_id --> Update learning path (title)
// []POST /api/paths/:path_id/module --> Create module and assign it to learning path
// []POST /api/paths/:path_id/duplicate --> Duplicate a learning pat