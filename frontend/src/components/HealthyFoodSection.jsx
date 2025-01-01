import React from "react";
import './HealthyFoodSection.css';

const HealthyFoodSection = () => {
    const openModal = () => {
        document.getElementById("videoModal").style.display = "flex"; // Flex for centering the modal
    };

    const closeModal = () => {
        document.getElementById("videoModal").style.display = "none";
    };

    return (
        <div className="healthy-food-section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                            className="healthy-food-section-img"
                            alt="Healthy Food Plate"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="col-12 col-md-7 text-center text-md-left">
                        <h1 className="healthy-food-section-heading">
                            Fresh, Healthy, Organic, Delicious Fruits
                        </h1>
                        <p className="healthy-food-section-description">
                            Say no to harmful chemicals and go fully organic with our range of
                            fresh fruits and veggies. Pamper your body and your senses with
                            the true and unadulterated gifts from mother nature.
                        </p>
                        <div className="custom-button-container">
                            <button
                                className="custom-button"
                                onClick={openModal}
                            >
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Modal */}
            <div
                id="videoModal"
                className="custom-modal"
            >
                <div className="custom-modal-content">
                    <div className="custom-modal-header">
                        <h5 className="custom-modal-title">Healthy Food Video</h5>
                        <button
                            type="button"
                            className="close-button"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="custom-modal-body">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/yXOdXsVChH8"
                            allowFullScreen
                            title="Healthy Food Video"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthyFoodSection;