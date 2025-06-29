/**
 * API BASE URL
 * @var	{String}
 */
const API_BASE_URL = 'http://localhost:5000/api';

// Authentication --------------------------------------------------------

/**
 * Sign up user
 * @param	{object} userData
 */
export const signUpUser = async userData => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});
		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('token', data.token);
			console.log('Sign up successful');
		} else {
			console.error('Sign up failed');
		}
	} catch (err) {
		console.error('Error :', err);
	}
}

/**
 * Log in user
 * @param	{object} credentials
 */
export const logInUser = async credentials => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		});
		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('token', data.token);
			console.log('Log in successful');
		} else {
			console.error('Log in failed');
		}
	} catch (err) {
		console.error('Error :', err);
	}
}

// Rooms ------------------------------------------------------

/**
 * Fetch rooms
 * @return	{object} - JSON object of all rooms if authorized
 */
export const fetchRooms = async () => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch(`${API_BASE_URL}/rooms/`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		return data;
	} catch (err) {
		console.error('Error :', err);
	}
}

/**
 * Fetch room details by its id
 * @param	{Number} roomId
 * @return 	{object} - JSON object of the room's detail
 */
export const fetchRoomDetails = async roomId => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch(`${API_BASE_URL}/rooms/${roomId}`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		return data;
	} catch (err) {
		console.error('Error :', err);
	}
}

/**
 * Add room
 * @param	{object} roomData
 * @return	{object} - Json object of room data if authorized
 */
export const addRoom = async roomData => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch(`${API_BASE_URL}/rooms/add`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(roomData)
		});
		const data = await response.json();
		
		if (response.ok) {
			console.log('Room successfully created');
		} else {
			console.error('Creating room failed');
		}

		return data;
	} catch (err) {
		console.error('Error :', err);
	}
}

/**
 * Delete room from database
 * @param	{integer} roomId
 * @return	{object} - Json object of the message
 */
export const deleteRoom = async roomId => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/delete`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		
		return data;
	} catch (err) {
		console.error('Error :', err);
	}
}
