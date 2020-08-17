import React from 'react';

const Common = ({ opening, mid, redir, bname, isrc, redirText }) => {
	return (
		<>
			<section className="d-flex align-items-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto ">
							<div className="row">
								<div className="align-self-center col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-2">
									<h1>
										{opening}{' '}
										<strong className="text-warning my-2">
											<br />
											{bname}
										</strong>
									</h1>
									<h2 className="text-muted blockquote my-3"> {mid}</h2>
									<div className="mt-3 my-3">
										<a id="hire-us" className="font-weight-bolder my-2 px-4 btn btn-outline-warning"
											href={redir}>
											{redirText}
										</a>
									</div>
								</div>
								<div className="mt-5 col-lg-6 order-1 order-lg-2">
									<img className="border border-warning rounded-lg img-fluid" src={isrc}
										alt="home-img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Common;
