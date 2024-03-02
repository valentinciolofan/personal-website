import React from 'react';


export default function Service({ pElement, serviceTitle, serviceContent }) {
       
          return (
            <div class="card card-side bg-base-100 shadow-xl">
                <div dangerouslySetInnerHTML={pElement}></div>
                <div class="card-body">
                    <h2 class="card-title">{serviceTitle}</h2>
                    <p>{serviceContent}</p>
                </div>
            </div>);
};
