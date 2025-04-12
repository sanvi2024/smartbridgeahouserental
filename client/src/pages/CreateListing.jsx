const CreateListing = () => {
<main className="p-9 max-w-4xl mx-auto mt-32 bg-gray-50 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Create a Listing
  </h1>
  {/* New Listing Button */}
  <div className="flex justify-end mb-6">
    <button
      onClick={() => {
        setFormData({
          imageUrls: [],
          name: '',
          description: '',
          address: '',
          type: 'rent',
          bedrooms: 1,
          bathrooms: 1,
          regularPrice: 50,
          discountPrice: 0,
          offer: false,
          parking: false,
          furnished: false,
        });
        setFiles([]);
        setImageUploadError(false);
        setError(false);
      }}
      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
    >
      + New Listing
    </button>
  </div>
  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-8">
    {/* Left Section */}
    <div className="flex flex-col gap-6 flex-1">
      <input
        type="text"
        placeholder="Name"
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        id="name"
        maxLength="62"
        minLength="10"
        required
        onChange={handleChange}
        value={formData.name}
      />
      <textarea
        type="text"
        placeholder="Description + contact details"
        
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        id="description"
        required
        onChange={handleChange}
        value={formData.description}
      />
      <input
        type="text"
        placeholder="Address"
        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        id="address"
        required
        onChange={handleChange}
        value={formData.address}
      />
      <div className="flex gap-6 flex-wrap">
        {[
          { id: 'sale', label: 'Sell' },
          { id: 'rent', label: 'Rent' },
          { id: 'parking', label: 'Parking spot' },
          { id: 'furnished', label: 'Furnished' },
          { id: 'offer', label: 'Offer' },
        ].map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={item.id}
              className="w-5 h-5"
              onChange={handleChange}
              checked={formData[item.id]}
            />
            <label htmlFor={item.id} className="text-gray-700">
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6">
        {[
          { id: 'bedrooms', label: 'Beds', min: 1, max: 10 },
          { id: 'bathrooms', label: 'Baths', min: 1, max: 10 },
          { id: 'regularPrice', label: 'Regular price ($)', min: 50, max: 10000000 },
        ].map((item) => (
          <div key={item.id} className="flex flex-col">
            <label htmlFor={item.id} className="text-gray-700 mb-1">
              {item.label}
            </label>
            <input
              type="number"
              id={item.id}
              min={item.min}
              max={item.max}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData[item.id]}
            />
          </div>
        ))}
        {formData.offer && (
          <div className="flex flex-col">
            <label htmlFor="discountPrice" className="text-gray-700 mb-1">
              Discounted price ($)
            </label>
            <input
              type="number"
              id="discountPrice"
              min="0"
              max="10000000"
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.discountPrice}
            />
          </div>
        )}
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col gap-6 flex-1">
      <p className="font-semibold text-gray-700">
        Images:
        <span className="font-normal text-gray-500 ml-2">
          The first image will be the cover (max 6)
        </span>
      </p>
      <div className="flex gap-4">
        <input
          onChange={(e) => setFiles(e.target.files)}
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          type="file"
          id="images"
          accept="image/*"
          multiple
        />
        <button
          type="button"
          disabled={uploading}
          onClick={handleImageSubmit}
          className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {imageUploadError && (
        <p className="text-red-600 text-sm">{imageUploadError}</p>
      )}
      {formData.imageUrls.length > 0 &&
        formData.imageUrls.map((url, index) => (
          <div
            key={url}
            className="flex justify-between items-center p-3 border rounded-lg"
          >
            <img
              src={url}
              alt="listing"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      <button
        disabled={loading || uploading}
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
      >
        {loading ? 'Creating...' : 'Create Listing'}
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  </form>
</main>
}
export default CreateListing;