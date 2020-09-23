import './style.scss';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { ReloadOutlined, AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

export const View = () => {
	const [contacts, setContacts] = useState([]);
	const [baseContacts, setBaseContacts] = useState([]);
	const [pages, setPages] = useState({ min: 0, max: 10 });
	const [statistics, setStatistics] = useState({ persons: 0, female: 0, male: 0, binary: 0, most: 0, mostGender: '' });
	const [classSort, setClassSort] = useState('ascend');
	const [localView, setlocalView] = useState('');
	const [tooltipName, setTooltipName] = useState('Click sort by A-Z');
	const [shadow, setShadow] = useState('');
	let div;

	const fetchRequest = () => {
		setShadow('contacts__shadow')
		fetch(`https://randomuser.me/api/?results=${Math.floor(Math.random() * (30 - 100 + 1)) + 100}`)
			.then(response => response.json())
			.then(json => handleViewUsers(json.results))
			.catch(error => console.error(error))
	}
	const handleViewUsers = (results) => {
		setContacts(results)
		setBaseContacts(results)
		setClassSort('ascend')
		setTooltipName('Click sort by A-Z')
		if (localStorage.getItem('view')) {
			setlocalView(localStorage.getItem('view'))
		} else if (!localStorage.getItem('view')) {
			localStorage.setItem('view', 'displayTable')
			setlocalView('displayTable')
		}
		let female = 0, male = 0, binary = 0, most = {}
		results.map((user) => {
			most.num = Math.max(female += 1 ? user.gender === 'female' : null,
				male += 1 ? user.gender === 'male' : null,
				binary += 1 ? user.gender === 'non-binary' : null)
		})
		most.num === female ? most.gender = 'femail' : most.num === male ? most.gender = 'male' : most.gender = 'non-binary'
		setStatistics({ persons: results.length, female: female, male: male, binary: binary, most: most.num, mostGender: most.gender })
		setShadow('contacts__none')
	}
	const handleSortByItems = (e) => {
		let arr = [].concat(contacts)
		if (e.target.classList.contains('ascend')) {
			arr.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
			setClassSort('descend')
			setTooltipName('Click sort by Z-A')
			handleRemoveTooltip()
			setContacts(arr)
			return
		} else if (e.target.classList.contains('descend')) {
			arr.sort((a, b) => a.name.first < b.name.first ? 1 : -1)
			setClassSort('default')
			setTooltipName('Click to cancel sort')
			handleRemoveTooltip()
			setContacts(arr)
			return
		} else if (e.target.classList.contains('default')) {
			setTooltipName('Click sort by A-Z')
			setClassSort('ascend')
			handleRemoveTooltip()
			setContacts(baseContacts)
			return
		} else if (e.target.classList.contains('gender')) {
			arr.sort((a, b) => a.gender > b.gender ? 1 : -1)
		} else if (e.target.classList.contains('nat')) {
			arr.sort((a, b) => a.nat > b.nat ? 1 : -1)
		} else if (e.target.classList.contains('username')) {
			arr.sort((a, b) => a.login.username > b.login.username ? 1 : -1)
		}
		handleRemoveTooltip()
		setContacts(arr)
	}
	const handlePagination = (page, pageSize) => {
		page <= 1 ? setPages({ min: 0, max: pageSize }) : setPages({ min: (page - 1) * pageSize, max: pageSize * page })
	}
	const handleViewTable = (e) => {
		if (e.target.classList.contains('displayTable')) return
		localStorage.removeItem('view')
		localStorage.setItem('view', 'displayTable')
		setlocalView('displayTable')
	}
	const handleViewGrid = (e) => {
		if (e.target.classList.contains('displayGrid')) return
		localStorage.removeItem('view')
		localStorage.setItem('view', 'displayGrid')
		setlocalView('displayGrid')
	}
	const handleToolip = (e) => {
		if (!e.target.dataset.tooltip) return
		let coords = e.target.getBoundingClientRect()
		div = document.createElement('div')
		document.body.append(div)
		div.innerHTML = e.target.dataset.tooltip
		div.classList.add('contacts__tooltip')
		div.style.left = coords.left - (div.offsetWidth - e.target.offsetWidth) / 2 + 'px'
		div.style.top = coords.top - 28 + window.pageYOffset + 'px'
	}
	const handleRemoveTooltip = () => {
		if (div) div.remove()
	}
	useEffect(() => {
		fetchRequest()
	}, [])
	return (
		<div className={'contacts'}>
			<h1>Contacts</h1>
			<div className={'contacts__header'}>
				<ReloadOutlined onClick={fetchRequest} />
				<div className={'contacts__view'}>
					<BarsOutlined onClick={handleViewTable} className={localView} />
					<AppstoreOutlined onClick={handleViewGrid} className={localView} />
				</div>
			</div>
			<div className={'contacts__filter'}>
				<h3>Filter by:</h3>
				<div onMouseOver={handleToolip} onMouseOut={handleRemoveTooltip}>
					<p onClick={handleSortByItems} className={classSort} data-tooltip={tooltipName}>name</p>
					<p onClick={handleSortByItems} className={'gender'} data-tooltip="Click to sort">genfer</p>
					<p onClick={handleSortByItems} className={'nat'} data-tooltip="Click to sort">nationality</p>
					<p onClick={handleSortByItems} className={'username'} data-tooltip="Click to sort">username</p>
					<p onClick={handleSortByItems} className={'default'} data-tooltip="Click to reset">reset</p>
				</div>
			</div>
			<table className={localView}>
				<thead>
					<tr>
						<th rowSpan="2">NAME</th>
						<th rowSpan="2">BIRTHDAY</th>
						<th rowSpan="2">EMAIL</th>
						<th rowSpan="2">TELEPHONE</th>
						<th rowSpan="1" colSpan="2">ADDRESS</th>
						<th rowSpan="2">GENDER</th>
						<th rowSpan="2">NAT</th>
						<th rowSpan="2">USERNAME</th>
					</tr>
					<tr>
						<th>country</th>
						<th>street, city, state postcode</th>
					</tr>
				</thead>
				<tbody>
					{contacts.length > 0 &&
						contacts.slice(pages.min, pages.max).map((user, index) => (
							<tr key={index}>
								<td>{user.name.first} {user.name.last}</td>
								<td>{new Date(user.dob.date).toLocaleDateString('en-US')}</td>
								<td><a href={"mailto:" + user.email} target="_blank">{user.email}</a></td>
								<td><a href={"tel:" + user.phone}>{user.phone}</a></td>
								<td>{user.location.country}</td>
								<td>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state} {user.location.postcode}</td>
								<td>{user.gender}</td>
								<td>{user.nat}</td>
								<td>{user.login.username}</td>
							</tr>
						))}
				</tbody>
			</table>
			<div className={localView + ' contacts__grid'}>
				{contacts.length > 0 &&
					contacts.slice(pages.min, pages.max).map((user, index) => (
						<div key={index}>
							<h5>NAME</h5>
							<p>{user.name.first} {user.name.last}</p>
							<h5>BIRTHDAY</h5>
							<p>{new Date(user.dob.date).toLocaleDateString('en-US')}</p>
							<h5>EMAIL</h5>
							<p><a href={"mailto:" + user.email} target="_blank">{user.email}</a></p>
							<h5>TELEPHONE</h5>
							<p><a href={"tel:" + user.phone}>{user.phone}</a></p>
							<h5>ADDRESS</h5>
							<p>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state} {user.location.postcode}</p>
							<h5>GENDER</h5>
							<p>{user.gender}</p>
							<h5>NATIONALITY</h5>
							<p>{user.nat}</p>
							<h5>USERNAME</h5>
							<p>{user.login.username}</p>
						</div>
					))}
			</div>
			<p>Contacts: {statistics.persons}</p>
			<p>Gender female: {statistics.female}</p>
			<p>Gender male: {statistics.male}</p>
			<p>Gender non-binary: {statistics.binary}</p>
			<p>Most contacts ({statistics.mostGender}): {statistics.most} </p>
			<p></p>
			<Pagination defaultCurrent={1}
				onChange={handlePagination}
				total={contacts.length} />
			<div className={shadow}></div>
		</div >
	);
};

