import React from "react";
import  ReactDOM from "react-dom/client";
const container = React.createElement('div', {
    id: 'container',
    key:11
}, [
    React.createElement('div', { className: 'row', key:12}, 
        [
            React.createElement('div', { className: 'col', key: 1}, 'col1111e'),
            React.createElement('div', { className: 'col', key: 2},  'col2')
        ]), 
    React.createElement('div', { className: 'row', key: 13},
        [
            React.createElement('div', { className: 'col', key: 3}, 'col3'),
            React.createElement('div', { className: 'col', key: 4},  'col4')
        ])
   ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);