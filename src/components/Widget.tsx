import { Card } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Widget = () => {
	return (
		<WidgetWrapper>
			<div id="fixed-position">
				<div className="job-img">
					<img src="images/job.jpg" alt="jobs image"></img>
				</div>

				<Card style={{ marginTop: '20px' }}>
					<div className="job-img">
						<img
							src="https://id.safenet.or.id/wp-content/uploads/2020/03/covid19.jpg"
							alt="covid 19 image"></img>
					</div>
				</Card>

				<Card style={{ marginTop: '20px' }}>
					<div className="job-img">
						<img
							src="https://inspirationfeed.com/wp-content/uploads/2015/08/LinkedIn.jpg"
							alt="covid 19 image"></img>
					</div>
				</Card>

				<Card className="card learn">
					<h3>
						grow your skills and advance your career with LinkedIn Learning
					</h3>
					<h4>Today’s top courses</h4>
					<div>
						<p>1. Problem Solving & Troubleshooting</p>
						<span>Jeff Ansell</span>
					</div>
					<div>
						<p> 2. Agile Foundations</p>
						<span> Doug Rose</span>
					</div>

					<div>
						<p>3. Communicating with Confidence</p>
						<span>Tatiana Kolovou</span>
					</div>
				</Card>

				<div className="help-options">
					<p>
						<span>About</span>
						<span>Help Center</span>
						<span>Accessibility</span>
					</p>
					<p>
						<span>Ad Choices</span>
						<span> Advertising</span>
					</p>

					<p>LinkedIn Corporation &copy; 2021</p>
				</div>
			</div>
		</WidgetWrapper>
	)
}

export default React.memo(Widget)

const WidgetWrapper = styled.div`
	font-size: 0.9rem;
	@media (max-width: 992px) {
		display: none;
	}

	.card {
		padding: 1rem;
		margin-bottom: 0.8rem;
		@media (max-width: 578px) {
			margin: 0;
			margin-top: 0.8rem;
		}
	}

	.card.learn,
	.card.job {
		font-size: 0.8rem;
		/* display: none; */
		p {
			line-height: 1.7;
		}

		span {
			color: #0a66c2;
		}
		div,
		h3,
		h4 {
			margin-bottom: 0.8rem;
		}
	}

	min-width: 250px;
	width: 250px;

	#fixed-position {
		position: fixed;
		min-width: 250px;
		width: 250px;

		&:hover {
			overflow-y: auto !important;
		}
	}

	.help-options {
		padding: 1rem;

		font-size: 0.8rem;

		span {
			margin-right: 0.7rem;
			cursor: pointer;
			transition: 0.3s;
			&:hover {
				color: #0a66c2;
				text-decoration: underline;
			}
		}

		p {
			margin: 1rem 0;
		}
	}

	.job-img img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
