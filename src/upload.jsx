import React from 'react';
import './App.css';

function Upload(){
  return(
   <div>
			<input type="file" name="file" />
      <input type="submit" value="Upload" />
		</div>
	)
}

export default Upload;
