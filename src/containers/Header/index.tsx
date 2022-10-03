import React from 'react';//lazy
import * as S from './style';
import {Link} from 'react-router-dom';

function Header() {

	return (
		<S.Wrapper>
			<div className="container">
				<div className='bg'>
				
			<div className="content">
			<div className='ww'>
				<Link to ="/">
			<div className="Yeolame">
				YEOLMAE
			</div>
			</Link>
			<div className='bg_asset'>
			<div className='asset'>
				asset
			</div>
			
			</div>
			</div>
			<div className='span_content'>
				<Link to = "/xnwk">
				<span>
						투자하기
				</span>
				</Link>
				<Link to ="eocnf">
				<span>
						대출받기
						</span>
						</Link>
						<Link to ="company">
						<span>
						회사소개
						</span>
						</Link>
						<Link to ="center">
						<span>
						고객센터	
						</span>
						<span>
						고객센터
						</span>
						</Link>
						<Link to ="login">
						<button className ="log" >로그인</button>
						</Link>
						</div>						
						</div>
						</div>
				</div>
		</S.Wrapper >
	);
}

export default Header;