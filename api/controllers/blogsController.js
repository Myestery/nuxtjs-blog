import Blog from "../models/Blog"
const validator = require("express-validator");

// Get all
const list = function(req, res, next) {
  Blog.find()
    .populate("User", ["full_name", "email"])
    .exec(function(err, blogs) {
      if (err) {
        return res.status(500).json({
          message: "Error getting records."
        });
      }
      return res.json(blogs);
    });
};

// Get one
const show = function(req, res) {
  var id = req.params.id;
  Blog.findOne({ _id: id }, function(err, blog) {
    if (err) {
      return res.status(500).json({
        message: "Error getting record."
      });
    }
    if (!blog) {
      return res.status(404).json({
        message: "No such record"
      });
    }
    return res.json(blog);
  });
};

// Create
const create = [
  // validations rules
  validator.body("title", "Please enter Blog Title").isLength({ min: 1 }),
  //   validator.body('title').custom(value => {
  //     return Article.findOne({title:value}).then(article => {
  //       if (article !== null) {
  //         return Promise.reject('Title already in use');
  //       }
  //     })
  //   }),
  //   validator.body('author', 'Please enter Author Name').isLength({ min: 1 }),
  validator.body("body", "Please enter Article Content").isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // initialize record
    let blog = new Blog({
      title: req.body.title,
      body: req.body.body,
      User: req.body.user
    });

    // save record
    blog.save(function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: "Error saving record",
          error: err
        });
      }
      return res.json({
        message: "saved",
        _id: blog._id
      });
    });
  }
];

// Update
const update = [
  // validation rules
  validator.body("title", "Please enter Blog Title").isLength({ min: 1 }),
  //   validator.body('title').custom( (value, {req}) => {
  //     return Article.findOne({ title:value, _id:{ $ne: req.params.id } })
  //       .then( article => {
  //       if (article !== null) {
  //         return Promise.reject('Title already in use');
  //       }
  //       })

  //   }),
  //   validator.body('author', 'Please enter Author Name').isLength({ min: 1 }),
  validator.body("body", "Please enter Blog Content").isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    let id = req.params.id;
    Blog.findOne({ _id: id }, function(err, blog) {
      if (err) {
        return res.status(500).json({
          message: "Error saving record",
          error: err
        });
      }
      if (!blog) {
        return res.status(404).json({
          message: "No such record"
        });
      }

      // initialize record
      blog.title = req.body.title ? req.body.title : blog.title;
      // blog.author =  req.body.author ? req.body.author : blog.author;
      blog.body = req.body.body ? req.body.body : blog.body;

      // save record
      blog.save(function(err, blog) {
        if (err) {
          return res.status(500).json({
            message: "Error getting record."
          });
        }
        if (!blog) {
          return res.status(404).json({
            message: "No such record"
          });
        }
        return res.json(blog);
      });
    });
  }
];

// Delete
const remove = (req, res) => {
  let id = req.params.id;
  Blog.findByIdAndRemove(id, function(err, blog) {
    if (err) {
      return res.status(500).json({
        message: "Error getting record."
      });
    }
    return res.json(blog);
  });
};

export default {
  list,
  create,
  update,
  show,
  remove
};
